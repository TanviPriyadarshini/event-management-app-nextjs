'use client'

import React from 'react'
import { Button } from '@nextui-org/react'
import { useFormStatus } from 'react-dom'

const SubmitButton = ({ label, ...btnProps }) => {

    const { pending, data } = useFormStatus()

    return (
        <Button {...btnProps} type="submit" isLoading={pending}>
            {label}
        </Button>
    )
}

export default SubmitButton