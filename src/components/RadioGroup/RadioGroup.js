import React from 'react';

import { useRadioGroup } from 'react-aria';

import { useRadioGroupState } from 'react-stately';

import * as RadioGroup from '@radix-ui/react-radio-group';

// let RadioContext = React.createContext(null);

// function RadioGroup(props) {
//   let { children, label, description, errorMessage } = props;
//   let state = useRadioGroupState(props);
//   let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } = useRadioGroup(props, state);

//   return (
//     <div {...radioGroupProps}>
//       <span {...labelProps}>{label}</span>
//       <RadioContext.Provider value={state}>
//         {children}
//       </RadioContext.Provider>
//       {description && (
//         <div {...descriptionProps} style={{ fontSize: 12 }}>{description}</div>
//       )}
//       {errorMessage && state.isInvalid &&
//         (
//           <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
//             {errorMessage}
//           </div>
//         )}
//     </div>
//   );
// }

function RadioGroupWrapper() {

  return (
    <RadioGroup.Root className="RadioGroupRoot" defaultValue="default" aria-label="View density">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="default" id="r1">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r1">
          Default
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="comfortable" id="r2">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r2">
          Comfortable
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item className="RadioGroupItem" value="compact" id="r3">
          <RadioGroup.Indicator className="RadioGroupIndicator" />
        </RadioGroup.Item>
        <label className="Label" htmlFor="r3">
          Compact
        </label>
      </div>
    </RadioGroup.Root>
  );
}

export default RadioGroupWrapper;








