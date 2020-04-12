import * as method from '../input'
import * as convert from '../number-parsers'

jest.mock('readline')
describe('program', () => {
    it('should call the ', () => {
        const spyconvert = jest.spyOn(convert, 'convertInput')
        method.getUserInput()
        expect(spyconvert).toHaveBeenCalled()
     })
 })