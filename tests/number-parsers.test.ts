import * as convert from '../src/core/number-parsers'
describe('toArabic function', ()=> {
    it('should convert successfuly 10 in roman to arabic', () => {
        expect(convert.toArabic('X')).toBe(10)
    })

    it('should convert successfuly MMXCIII in roman to arabic', () => {
        expect(convert.toArabic('MMXCIII')).toBe(2093)
    })

    it('should return an error message', () => {
        expect(convert.toArabic('IV5')).toEqual('Expressão Inválida.')
    })

    it('should return an error message', () => {
        expect(convert.toArabic('XXXX')).toEqual('Expressão Inválida.')
    })
})

describe('toRoman function', ()=> {
    it('should convert successfuly X in arabic to roman', () => {
        expect(convert.toRoman(10)).toEqual('X')
    })

    it('should convert successfuly CDXLIV in arabic to roman', () => {
        expect(convert.toRoman(444)).toBe('CDXLIV')
    })
})

describe('convertInput function', ()=> {
    it('should convert successfuly X in arabic to roman', () => {
        expect(convert.convertInput('XXX')).toBe(30)
    })

    it('should convert successfuly CDXLIV in arabic to roman', () => {
        expect(convert.convertInput('CDXLIV')).toBe(444)
    })

    it('should return an error message when invalid input', () => {
        expect(convert.convertInput('9C')).toBe('Expressão Inválida.')
    })

    it('should return an error message when invalid input', () => {
        expect(convert.convertInput('bb2')).toBe('Expressão Inválida.')
    })
})