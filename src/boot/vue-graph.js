import VueGraph from 'vue-graph';
import GraphLine from 'vue-graph/src/components/line.js';

export default async ({ Vue }) => {
  Vue.use(VueGraph);
  Vue.component(GraphLine.name, GraphLine);
};
