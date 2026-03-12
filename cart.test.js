import { describe, it, expect, vi } from 'vitest';
import { calculateTotal } from './cart';

describe('Тестування логіки кошика (Cart Logic)', () => {
  // Тест 1: Базовий розрахунок
  it('повинен правильно рахувати суму без знижки', () => {
    const items = [
      { name: 'Apple', price: 10, quantity: 2 },
      { name: 'Banana', price: 5, quantity: 3 }];
    expect(calculateTotal(items)).toBe(35); // Assertion
  });
  // Тест 2: Розрахунок зі знижкою
  it('повинен правильно застосовувати знижку 20%', () => {
    const items = [{ name: 'Item', price: 100, quantity: 1 }];
    expect(calculateTotal(items, 20)).toBe(80);
  });
  // Тест 3: Порожній кошик
  it('повинен повертати 0 для порожнього списку товарів', () => {
    expect(calculateTotal([])).toBe(0);
  });
  // Тест 4: Перевірка помилки (Negative test)
  it('повинен викидати помилку при некоректній знижці', () => {
    expect(() => calculateTotal([], -10)).toThrow("Invalid discount");
  });
  // Тест 5: Робота з великою кількістю товарів
  it('повинен коректно працювати з великою кількістю товарів', () => {
    const items = [{ name: 'Bulk', price: 1, quantity: 1000 }];
    expect(calculateTotal(items)).toBe(1000);
  });
  // Використання Mock-об’єкта
  it('повинен викликати функцію логування (Mock-тест)', () => {
    const items = [{ name: 'Test', price: 10, quantity: 1 }];
    const mockLogger = vi.fn(); 

    calculateTotal(items, 0, mockLogger);
    expect(mockLogger).toHaveBeenCalled();
    expect(mockLogger).toHaveBeenCalledWith("Total price calculated: 10");
  });
});
