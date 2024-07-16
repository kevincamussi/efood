import { ButtonStyle, ButtonLink } from './styles'

export type Props = {
  children: React.ReactNode
  type: 'link' | 'button'
  to?: string
  onClick?: () => void
}

const Button = ({ children, type, onClick, to }: Props) => (
  <>
    {type === 'button' ? (
      <ButtonStyle onClick={onClick} type="button">
        {children}
      </ButtonStyle>
    ) : (
      <ButtonLink onClick={onClick} type="button" to={to as string}>
        {children}
      </ButtonLink>
    )}
  </>
)

export default Button
