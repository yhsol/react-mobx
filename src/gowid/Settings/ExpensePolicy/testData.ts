import { ExpenseStateT } from './define/expensePolicy';

export const expensePolicyList: ExpenseStateT[] = [
  {
    purpose: 'purpose1',
    category: 'category1',
    limit: 'limit1'
  },
  {
    purpose: 'purpose2',
    category: 'category2',
    limit: 'limit2'
  },
  {
    purpose: 'purpose3',
    category: 'category3',
    limit: 'limit3'
  },
  {
    purpose: 'purpose4',
    category: 'category4',
    limit: 'limit4'
  },
  {
    purpose: 'purpose5',
    category: 'category5',
    limit: 'limit5'
  },
  {
    purpose: 'purpose6',
    category: 'category6',
    limit: 'limit6'
  },
  {
    purpose: 'purpose7',
    category: 'category7',
    limit: 'limit7'
  },
  {
    purpose: 'purpose8',
    category: 'category8',
    limit: 'limit8'
  },

  {
    purpose: 'testPurpose1',
    category: 'testUesr1',
    limit: 'testlimit1'
  },
  {
    purpose: 'testPurpose2',
    category: 'testcategory2',
    limit: 'testlimit2'
  }
];

export const categoryList = [
  'category1',
  'category2',
  'category3',
  'addedcategory1',
  'addedcategory2'
];
export const limitList = ['limit1', 'limit2', 'limit3', 'addedlimit1', 'addedlimit2'];

export const addCardTest: ExpenseStateT = {
  purpose: 'addedPurpose',
  category: 'addedCard',
  limit: 'addedlimit'
};
