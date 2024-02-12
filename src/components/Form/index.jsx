import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { getFormInfo } from '@/api/queries'
import MainContainer from './Parts/Containers/MainContainer'
import Intro from './Parts/Intro'
import FormContainer from './Parts/Containers/FormContainer'
import InputField from './Parts/Inputs/InputField'
import CheckboxInput from './Parts/Inputs/CheckboxInput'
import SelectInputComponent from './Parts/Inputs/SelectInputComponent'
import TextAreaInput from './Parts/Inputs/TextAreaInput'
import ButtonInput from './Parts/Inputs/ButtonInput'
import ErrorMessage from './Parts/ErrorMessage'
import { sendContactMail } from '@/api'
import Spinner from './Parts/Spinner'
import Poppup from './Parts/Poppup'
import { useBearStore } from '@/store'

const Form = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getFormInfo(iDInfo))
  const [userReview, setUserReview] = useState({
    name: '',
    email: '',
    tlf: '',
    country: '',
  })
  const [checked, setChecked] = useState(false)
  const [selectedService, setSelectedService] = useState('')
  const [comment, setComment] = useState('')
  const [activate, setActivate] = useState(false)
  const [errorMessage, setErrolMessage] = useState({
    name: 'error',
    email: 'error',
  })
  const [spin, setSpin] = useState(false)
  const [poppup, setPoppup] = useState(false)
  const { lang } = useBearStore()

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserReview({ ...userReview, [name]: value })
    if (value) setErrolMessage({ ...errorMessage, [name]: '' })
    if (!value) setErrolMessage({ ...errorMessage, [name]: 'error' })
    if (name === 'email' && !validateEmail(value) && value)
      setErrolMessage({ ...errorMessage, [name]: 'error' })
  }

  const updateCheckBoxInput = () => {
    setChecked(!checked)
  }

  const updateSelectedService = (value) => {
    setSelectedService(value)
  }

  const updateTextArea = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setActivate(true)
    const { name, email, tlf, country } = userReview
    if (!name || !email || !selectedService || !comment) {
      alert('You must fill all the mandatory fields!')
      return
    }
    setSpin(true)
    const message = `message from the user ${name} <br>
    ${tlf ? 'Their phone is: ' + tlf : ''}
    ${country ? '<br>Their country is: ' + country : ''}
    ${selectedService ? '<br>Your selected service is: ' + selectedService : ''}
    ${comment ? '<br>Message: ' + comment : ''}
    ${checked ? '<br>The user find us by email' : ''}
    `

    const templateParams = {
      user_name: name,
      user_email: email,
      message,
    }

    await sendContactMail(JSON.stringify(templateParams, null, 2), setSpin)
  }

  const closeModal = () => {
    setPoppup(false)
  }

  if (loading) return
  if (error) return <p>Error :</p>

  const formInfo = data.page.data.attributes.Form
  const {
    title,
    titulo,
    content,
    contenido,
    InputName,
    Mail,
    PhoneInput,
    CountryInput,
    ContactPreferences,
    SelectInput,
    options,
    textarea,
    valueBtn,
    valorBtn,
  } = formInfo

  return (
    <MainContainer>
      <Intro
        title={lang === 'en' ? title : titulo}
        content={lang === 'en' ? content : contenido}
      />

      <FormContainer onSubmit={handleSubmit}>
        <fieldset>
          <InputField
            label={lang === 'en' ? InputName.label : InputName.etiqueta}
            name={InputName.name}
            value={userReview.name}
            type={InputName.type}
            placeholder={
              lang === 'en' ? InputName.placeholder : InputName.textoTemporal
            }
            onChange={handleChange}
            error={activate ? errorMessage.name : ''}
          />
          <ErrorMessage
            activate={activate && errorMessage.name}
            message={
              lang === 'en'
                ? 'The name is a necessary field.'
                : 'El nombre es un campo necesario.'
            }
          />
          <InputField
            label={lang === 'en' ? Mail.label : Mail.etiqueta}
            name={Mail.name}
            value={userReview.email}
            type={Mail.type}
            placeholder={lang === 'en' ? Mail.placeholder : Mail.textoTemporal}
            onChange={handleChange}
            error={activate ? errorMessage.email : ''}
          />
          <ErrorMessage
            activate={activate && errorMessage.email}
            message={
              !userReview.email
                ? lang === 'en'
                  ? 'The mail field is require'
                  : 'El campo de correo es requerido'
                : lang === 'en'
                ? 'The mail format is not right'
                : 'El formato del correo no es el correcto'
            }
          />
          <InputField
            label={lang === 'en' ? PhoneInput.label : PhoneInput.etiqueta}
            name={PhoneInput.name}
            value={userReview.tlf}
            type={PhoneInput.type}
            placeholder={
              lang === 'en' ? PhoneInput.placeholder : PhoneInput.textoTemporal
            }
            onChange={handleChange}
          />
          <InputField
            label={lang === 'en' ? CountryInput.label : CountryInput.etiqueta}
            name={CountryInput.name}
            value={userReview.country}
            type={CountryInput.type}
            placeholder={
              lang === 'en'
                ? CountryInput.placeholder
                : CountryInput.textoTemporal
            }
            onChange={handleChange}
          />
          <CheckboxInput
            legend={
              lang === 'en'
                ? ContactPreferences.Legend
                : ContactPreferences.legenda
            }
            name={ContactPreferences.name}
            value={checked}
            label={
              lang === 'en'
                ? ContactPreferences.label
                : ContactPreferences.etiqueta
            }
            onChange={updateCheckBoxInput}
          />
        </fieldset>
        <fieldset>
          <SelectInputComponent
            legend={lang === 'en' ? SelectInput.Legend : SelectInput.legenda}
            id={SelectInput.idName}
            placeholder={
              lang === 'en'
                ? SelectInput.placeholder
                : SelectInput.textoTemporal
            }
            options={options}
            value={selectedService}
            onChange={updateSelectedService}
            error={activate ? (selectedService ? '' : 'error') : ''}
          />
          <ErrorMessage
            activate={activate && !selectedService}
            message={
              lang === 'en'
                ? 'You must choose a option here'
                : 'Debes elegir una opción aquí'
            }
          />
          <TextAreaInput
            label={lang === 'en' ? textarea.label : textarea.etiqueta}
            name={textarea.name}
            cols='30'
            rows='10'
            placeholder={
              lang === 'en' ? textarea.placeholder : textarea.textoTemporal
            }
            value={comment}
            onChange={updateTextArea}
            error={activate ? (comment ? '' : 'error') : ''}
          />
          <ErrorMessage
            activate={activate && !comment}
            message={
              lang === 'en'
                ? 'You must send us your message here'
                : 'Debes enviarnos tu mensaje aquí'
            }
          />
        </fieldset>
        <ButtonInput valueBtn={lang === 'en' ? valueBtn : valorBtn} />
      </FormContainer>
      {spin && <Spinner />}
      {poppup && <Poppup closeModal={closeModal} />}
      {/* Modal here */}
    </MainContainer>
  )
}
export default Form
