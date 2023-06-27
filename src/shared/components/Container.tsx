
interface Props {
    children: JSX.Element | JSX.Element[]
}

export const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-2xl px-8 py-5 sm:px-8 sm:py-7 sm:max-w-3xl md:max-w-5xl md:px-4 lg:py-7 lg:max-w-7xl lg:px-8">
        { children }
    </div>
  )
}
