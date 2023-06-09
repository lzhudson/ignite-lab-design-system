import { Checkbox, CheckboxProps } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text';
export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    children: 'Lorem ipsum.',
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className='flex items-center gap-2'>
          {Story()} 
          <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
        </div>
      )
    }
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
