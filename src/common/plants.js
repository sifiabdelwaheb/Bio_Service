function PlantForms(edit, value) {
  console.log('value of form', value)
  return {
    image: {
      elementType: 'Avatar',
      elementConfig: {
        type: 'file',
        label: 'Plant Image',
        // prefix: <Icon type="mail" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit && value.image ? value.image : '',
      validation: {
        required: false,
        isFile: true,
      },
      valid: edit ? true : false,
      touched: false,
    },

    organism: {
      elementType: 'Input',
      elementConfig: {
        type: 'text',
        label: 'organism',
        errormsg: 'invalid names',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? value.organism : '',
      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
    },
    names: {
      elementType: 'Input',
      elementConfig: {
        type: 'text',
        label: 'names',
        errormsg: 'invalid names',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? value.names : '',
      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
    },

    species: {
      elementType: 'Input',
      elementConfig: {
        type: 'text',
        label: 'species',
        errormsg: 'invalid species',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? value.species : '',
      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
    },

    isVascular: {
      elementType: 'Select',
      elementConfig: {
        type: 'text',
        label: 'isVascular',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? { label: value.isVascular, value: value.isVascular } : '',
      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
      options: [
        { label: 'True', id: 'True' },
        { label: 'False', id: 'False' },
      ],
    },
    hasFlower: {
      elementType: 'Select',
      elementConfig: {
        type: 'text',
        label: 'hasFlower',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? { label: value.hasFlower, value: value.hasFlower } : '',
      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
      options: [
        { label: 'True', id: 'True' },
        { label: 'False', id: 'False' },
      ],
    },
    hasSpores: {
      elementType: 'Select',
      elementConfig: {
        type: 'text',
        label: 'hasSpores',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? { label: value.hasSpores, value: value.hasSpores } : '',

      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
      options: [
        { label: 'True', id: 'True' },
        { label: 'False', id: 'False' },
      ],
    },

    Country: {
      elementType: 'Select',
      elementConfig: {
        type: 'text',
        label: 'Country',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? { label: value.Country, value: value.Country } : '',

      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
      options: [
        { label: 'True', id: 'True' },
        { label: 'False', id: 'False' },
      ],
    },
    City: {
      elementType: 'Select',
      elementConfig: {
        type: 'text',
        label: 'City',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? { label: value.City, value: value.City } : '',

      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
      options: [
        { label: 'True', id: 'True' },
        { label: 'False', id: 'False' },
      ],
    },
    Longitude: {
      elementType: 'Input',
      elementConfig: {
        type: 'text',
        label: 'Longitude',
        errormsg: 'invalid Longitude',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? value.Longitude : '',
      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
    },
    Latitude: {
      elementType: 'Input',
      elementConfig: {
        type: 'text',
        label: 'Latitude',
        errormsg: 'invalid Latitude',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },
      value: edit ? value.Latitude : '',
      validation: {
        required: true,
      },
      valid: edit ? true : false,
      touched: false,
    },
    description: {
      elementType: 'Description',
      elementConfig: {
        type: 'text',
        label: 'description',
        errormsg: 'invalid description',
        // prefix: <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
      },

      value: edit ? value && value.description : '',
      validation: {
        required: false,
      },
      valid: true,
      touched: true,
    },
  }
}

export default PlantForms
