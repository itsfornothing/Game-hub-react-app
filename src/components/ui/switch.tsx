import { Switch as ChakraSwitch } from "@chakra-ui/react"
import * as React from "react"

export interface SwitchProps extends ChakraSwitch.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.Ref<HTMLLabelElement>
  trackLabel?: { start: React.ReactNode; end: React.ReactNode }
  thumbLabel?: { start: React.ReactNode; end: React.ReactNode }
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(props, ref) {
    const { children, inputProps, rootRef, trackLabel, thumbLabel, ...rest } = props

    return (
      <ChakraSwitch.Root ref={rootRef} {...rest}>
        <ChakraSwitch.HiddenInput ref={ref} {...inputProps} />
        <ChakraSwitch.Control>
          <ChakraSwitch.Thumb>
            {thumbLabel?.start && (
              <ChakraSwitch.ThumbIndicator fallback={thumbLabel.start} />
            )}
            {thumbLabel?.end && (
              <ChakraSwitch.ThumbIndicator fallback={thumbLabel.end} />
            )}
          </ChakraSwitch.Thumb>
          {trackLabel && (
            <ChakraSwitch.Indicator fallback={trackLabel.start}>
              {trackLabel.end}
            </ChakraSwitch.Indicator>
          )}
        </ChakraSwitch.Control>
        {children && <ChakraSwitch.Label>{children}</ChakraSwitch.Label>}
      </ChakraSwitch.Root>
    )
  },
)