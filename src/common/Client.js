function ClientForms(edit, value) {
    console.log('value of form', value)
    return {


        Name: {
            elementType: 'Input',
            elementConfig: {
                type: 'text',
                label: 'Name',
                errormsg: 'invalid  Name',
                // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
            },
            value: edit ? value.organism : '',
            validation: {
                required: true,
            },
            valid: edit ? true : false,
            touched: false,
        },
        Email: {
            elementType: 'Input',
            elementConfig: {
                type: 'text',
                label: 'E-mail',
                errormsg: 'invalid email',
                // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
            },
            value: edit ? value.names : '',
            validation: {
                required: true,
            },
            valid: edit ? true : false,
            touched: false,
        },

        Phone: {
            elementType: "Input",
            elementConfig: {
                type: "text",
                label: "Phone"
                // prefix: <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        Company: {
            elementType: 'Input',
            elementConfig: {
                type: 'text',
                label: 'Company',
                errormsg: 'invalid Company',
                // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
            },
            value: edit ? value.names : '',
            validation: {
                required: true,
            },
            valid: edit ? true : false,
            touched: false,
        },
        Message: {
            elementType: 'Description',
            elementConfig: {
                type: 'text',
                label: 'Message',
                errormsg: 'invalid Description',
                // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
            },
            value: edit ? value.names : '',
            validation: {
                required: true,
            },
            valid: edit ? true : false,
            touched: false,
        },


    }
}

export default ClientForms
