import { expect } from 'vitest';
import * as matchers from '@testing-library/jest-dom/matchers'; // NOTE the “* as”

expect.extend(matchers);
