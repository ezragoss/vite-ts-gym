import { loadAll } from 'js-yaml'

async function loadYaml(path: string): Promise<Array<Record<string, any>>> {
  const result = await import(/* @vite-ignore */ path + '?raw')

  console.log(result.default)
  return (await loadAll(result.default)) as Array<Record<string, any>>
}

async function loadPost(post_name: string): Promise<Record<string, any>> {
  const post_components = await loadYaml('/src/resources/posts/' + post_name + '.yaml')
  const post = post_components[0] as Record<string, any>
  post.body = post_components[1]
  return post
}

export default loadPost
