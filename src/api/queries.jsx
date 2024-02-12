import { gql } from '@apollo/client'
import Page from '@/pages/Page'
import { Route } from 'react-router-dom'

const pageCreation = (title, url, id) => {
  const page = (
    <Route
      key={title}
      path={url}
      element={<Page iDInfo={id} title={title} />}
    />
  )

  return page
}

const generatePage = (routes, page) => {
  const { id, attributes } = page
  const { url, title } = attributes

  routes.push(pageCreation(title, url, id))
}

const GET_MENU_ITEMS = gql`
  query {
    headerLink {
      data {
        attributes {
          links {
            title
            href
            id
            children {
              title
              href
            }
            titulo
          }
        }
      }
    }
  }
`
const GET_All_PAGES = gql`
  query {
    pages {
      data {
        id
        attributes {
          title
          url
        }
      }
    }
  }
`

const getPageInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            textCircle {
              title
            }
            TwoTextCircles {
              LeftTextCircle {
                title
              }
            }
            card {
              title
            }
            cardCircle {
              title
            }
            cardCircleProfile {
              title
            }
            Profiles {
              Profiles {
                title
              }
            }
            Carrousel {
              title
            }
            CountCircle {
              content
            }
            Form {
              title
            }
            InfoImages {
              title
            }
            KeyIndustries {
              title
              MainPage
            }
            Certifications {
              title
            }
            Manifesto {
              title
            }
            secondTextCircle {
              title
            }
            Commitment {
              title
            }
            PresentationImg {
              data {
                attributes {
                url
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCircleTextInfo = (id, provider = 'textCircle') => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            ${provider} {
              title
              content
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              titulo
              contenido
            }
          }
        }
      }
    }
  `
}

const getCardCircleInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            cardCircle {
              title
              titulo
              content
              contenido
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getTwoCirclesTextInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            TwoTextCircles {
              LeftTextCircle {
                title
                content
                titulo
                contenido
                image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
              RightTextCircle {
                title
                content
                titulo
                contenido
                image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCarrouselInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Carrousel {
              title
              content
              titulo
              contenido
              link
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCardInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            card {
              title
              content
              button
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCardProfileInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            cardCircleProfile {
              title
              name
              linkedin
              mail
              image {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getProfilesInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Profiles {
              Profiles {
                title
                titulo
                name
                linkedin
                mail
                image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCardTitle = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            CardContainerTitle
          }
        }
      }
    }
  `
}

const getCountCircleInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            CountCircle {
              number
              content
              contenido
              color
              PlusSymbol
            }
          }
        }
      }
    }
  `
}

const getManifestoInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Manifesto {
              title
              content
              titulo
              contenido
            }
          }
        }
      }
    }
  `
}

const getKeyIndustriesInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            KeyIndustries {
              title
              titulo
              TitleImages {
                title
                titulo
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                content
                contenido
              }
            }
          }
        }
      }
    }
  `
}

const getTitleAndImgesInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            InfoImages {
              title
              titulo
              TitleImages {
                title
                titulo
                content
                contenido
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCertificationsInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Certifications {
              title
              titulo
              MainText
              textoPrincipal
              FirstCertificate {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              SecondCertificate {
                FirstImage {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                SecondImage {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
              ThirdCertificate {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              FirstText
              SecondText
              ThirdText
              primerTexto
              segundoTexto
              tercerTexto
              fourthText
              cuartoTexto
              fourthCertificate {
                data {
                  attributes {
                    url 
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  `
}

const getFormInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Form {
              title
              titulo
              content
              contenido
              InputName {
                label
                name
                placeholder
                type
                etiqueta 
                textoTemporal
              }
              Mail {
                label
                name
                placeholder
                type
                etiqueta 
                textoTemporal
              }
              PhoneInput {
                label
                name
                placeholder
                type
                etiqueta 
                textoTemporal
              }
              CountryInput {
                label
                name
                placeholder
                type
                etiqueta 
                textoTemporal
              }
              ContactPreferences {
                Legend
                name
                label
                checked
                legenda
                etiqueta
              }
              SelectInput {
                Legend
                idName
                placeholder
                legenda 
                textoTemporal
              }
              options {
                option
                opcion
              }
              textarea {
                label 
                name 
                placeholder
                etiqueta 
                textoTemporal
              }
              valueBtn
              valorBtn
            }
          }
        }
      }
    }
  `
}

const getPresentationImg = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            PresentationImg {
              data {
                attributes {
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  `
}

const getCommitmentInfo = (id) => {
  return gql`
    query {
      page(id: ${id}) {
        data {
          attributes {
            Commitment {
              title
              titulo
              certificationsTitle
              tituloCertificados
              firstCertificate {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              secondCertificate {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              thirdCertificate {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              fourthCertificate {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              fifthCertificate {
                data {
                  attributes {
                    url 
                    alternativeText
                  }
                }
              }
              content
              contenido
              FirstText
              primerTexto
              SecondText
              segundoTexto
              ThirdText
              tercerTexto
              MainText
              textoPrincipal
              fourthText
              cuartoTexto
            }
          }
        }
      }
    }
  `
}

export {
  generatePage,
  GET_MENU_ITEMS,
  GET_All_PAGES,
  getPageInfo,
  getCircleTextInfo,
  getTwoCirclesTextInfo,
  getCarrouselInfo,
  getCardInfo,
  getCardProfileInfo,
  getCardTitle,
  getCountCircleInfo,
  getManifestoInfo,
  getKeyIndustriesInfo,
  getTitleAndImgesInfo,
  getFormInfo,
  getCertificationsInfo,
  getProfilesInfo,
  getPresentationImg,
  getCardCircleInfo,
  getCommitmentInfo,
}
