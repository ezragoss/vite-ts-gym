/* Utilities for get the downloadable information based on a name */

import { load } from 'js-yaml'

export interface Entry {
  name: string
  url: string
  description: string
}

export interface Downloads {
  name: string
  description: string
  entries: Array<Entry>
}

async function loadDownloads(download: string): Promise<Downloads | void> {
  const url_prefix = '../resources/documents/' + download + '/'

  const url = new URL(url_prefix + 'metadata.yaml?raw', import.meta.url).href
  const result = await fetch(url)
  if (!result.ok) {
    return
  }

  const entries: Array<Entry> = []

  const metadata: Record<string, any> = (await load(await result.text())) as Record<string, any>
  for (const element of metadata.downloads) {
    const download_meta = new URL(url_prefix + element + '.yaml?raw', import.meta.url).href
    const meta_result = await fetch(download_meta)
    if (!meta_result.ok) return

    const meta_yaml = (await load(await meta_result.text())) as Entry
    entries.push({
      name: meta_yaml.name,
      description: meta_yaml.description,
      url: url_prefix + meta_yaml.url,
    })
  }

  return { name: metadata.name, description: metadata.description, entries: entries } as Downloads
}

export default loadDownloads
