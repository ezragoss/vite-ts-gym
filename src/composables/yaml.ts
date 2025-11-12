import { loadAll } from 'js-yaml'

async function loadYaml(path: string): Promise<Array<Record<string, any>>> {
  console.log(path + '?raw')
  const result = await fetch(path + '?raw')
  const text = await result.text()

  return loadAll(text) as Array<Record<string, any>>
}

async function loadPost(post_name: string): Promise<Record<string, any>> {
  const post_components = await loadYaml('../resources/posts/' + post_name + '.yaml')
  const post = post_components[0] as Record<string, any>
  post.body = post_components[1]
  return post
}

export default loadPost
