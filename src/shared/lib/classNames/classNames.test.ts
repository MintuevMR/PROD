import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional param', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });
    test('with mods param', () => {
        expect(classNames('someClass', { hovered: true, scroll: false }, ['class1', 'class2'])).toBe('someClass class1 class2 hovered');
    });
});
