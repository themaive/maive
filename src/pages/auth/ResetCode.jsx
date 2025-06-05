import React from 'react'
import AuthHeader from '../../components/AuthHeader'
import BackButton from '../../components/BackButton'
import FormHeading from '../../components/FormHeading'
import VSpacer from '../../components/VSpacer'
import InputField from '../../components/InputField'
import PrimaryButton from '../../components/PrimaryButton'
import { useNavigate } from 'react-router-dom'

function ResetCode() {

  const navigate = useNavigate();

const styles = {
    main: 'lg:w-120 lg:py-5'
  }

  return (
    <section className='w-screen min-h-screen h-full px-4'>
      <AuthHeader></AuthHeader>

      <main className={`mt-5 p-2 w-full h-full mx-auto my-auto flex justify-between items-start ${styles.main}`}>
        <BackButton to={'/auth/forgot-password'}></BackButton>
        <form action="" className='w-10/12 h-full ms-4'>
        <FormHeading title={'Enter the code that we\'ve sent to your email'}></FormHeading>
        <VSpacer height={2}></VSpacer>
        <InputField hint={'Enter code'} type={'email'}></InputField>
        <VSpacer height={2}></VSpacer>
        <PrimaryButton title={'Continue'} onClick={()=>{
          navigate('/auth/reset-code');
        }}></PrimaryButton>
        <VSpacer height={2} />
      </form>
      </main>

    </section>
  )
}

export default ResetCode