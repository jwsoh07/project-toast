import React from 'react';

import Radio from '../Radio';

import RadioGroup from '../RadioGroup/RadioGroup';

import { capitalizeFirstLetter } from '../../utils';

// lifting state up
function ToastVariantOptions({ setVariant, variant }) {
  const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

  return (  
    <RadioGroup label="Variant" onChange={setVariant} value={variant}>
      {VARIANT_OPTIONS.map((option, index) => <Radio value={option} key={index}>{capitalizeFirstLetter(option)}</Radio>)}
    </RadioGroup>
  )
}

export default ToastVariantOptions;
