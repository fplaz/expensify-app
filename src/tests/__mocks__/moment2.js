const originalMoment = jest.requireActual('moment')

const mockedMoment = (timestamp = 0) => {
    const instance = originalMoment(timestamp)

    Object.keys(instance).forEach((key) => {
        if(typeof instance[key] === 'function') {
            instance[key] = jest.fn()
        }
    })

    return instance
}

export default mockedMoment