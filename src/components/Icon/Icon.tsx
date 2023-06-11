import * as icons from './icons'

export type IconName = keyof typeof icons

type Props = {
  name?: IconName
}

export function Icon({name}: Props) {
  if (!name) return null

  const IconSvg = icons[name]

  return (
    <IconSvg />
  )
}
