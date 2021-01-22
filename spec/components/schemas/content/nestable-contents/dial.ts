import { SchemaObject } from 'openapi3-ts';
import { createComponentRef } from '../../../../../utils/ref';
import { ref as baseRef } from './base';

const dial: SchemaObject = {
  type: 'object',
  description: "Opesn the default dial opp on the user's device.",
  allOf: [{
    $ref: baseRef,
  }, {
    type: 'object',
    properties: {
      text: {
        type: 'string',
        description: 'Text to be displayed inside the button.',
        example: 'Call us',
      },
      phoneNumber: {
        type: 'string',
        description: 'Phone Number (E.164 format).',
        example: '+558006464777',
      },
      payload: {
        type: 'string',
        description: 'Content to be sent back as a message event when the user clicks the button.',
        example: 'will-dial',
      },
    },
    required: [
      'type',
    ],
  }],
};

export const ref = createComponentRef(__filename);
export default dial;
