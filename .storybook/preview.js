import { addDecorator, addParameters } from "@storybook/react"
import { addReadme } from 'storybook-readme'
import { withKnobs } from '@storybook/addon-knobs'

addDecorator(withKnobs, addReadme)

addParameters({
  readme: {
    codeTheme: 'github'
  }
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}