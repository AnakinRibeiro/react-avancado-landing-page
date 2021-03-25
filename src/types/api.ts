export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

// logo é do tipo landingPagePropos
export type LandingPageProps = {
  // propriedades do logo são do tipo LogoProps
  logo: LogoProps
  header: HeaderProps
}
