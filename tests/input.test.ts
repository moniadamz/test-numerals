import * as method from '../src/core/input'
import * as convert from '../src/core/number-parsers'

jest.mock('readline')
describe('program', () => {
    it('should call the ', () => {
        const spyconvert = jest.spyOn(convert, 'convertInput')
        method.getUserInput()
        expect(spyconvert).toHaveBeenCalled()
     })
 })