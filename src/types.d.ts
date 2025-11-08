declare module '*.yaml' {
  const value: Record<string, any> // Or a more specific type if known
  export default value
}
