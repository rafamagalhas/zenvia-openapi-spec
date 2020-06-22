import { TagObject } from 'openapi3-ts';
import { rawLoad } from '../../utils/raw-load';

const contentTypesDescription = rawLoad(__dirname, './message-content-types.md');
const subscriptionsDescription = rawLoad(__dirname, './subscriptions.md');
const templatesDescription = rawLoad(__dirname, './templates.md');
const messageReportDescription = rawLoad(__dirname, './message-report.md');
const flowReportDescription = rawLoad(__dirname, './flow-report.md');

const tags: TagObject[] = [{
  name: 'Messaging',
  description: contentTypesDescription,
}, {
  name: 'Subscriptions',
  description: subscriptionsDescription,
}, {
  name: 'Templates',
  description: templatesDescription,
}, {
  name: 'Message Report',
  description: messageReportDescription,
}, {
  name: 'Flow Report',
  description: flowReportDescription,
}];

export default tags;
