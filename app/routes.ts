import { type RouteConfig, index, route } from "@react-router/dev/routes"

export default [
  index("routes/home.tsx"),
  route("workflows/:workflowId", "routes/workflows/playground/page.tsx"),
] satisfies RouteConfig
