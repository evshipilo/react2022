import { Route, Routes } from 'react-router-dom';
import { HookUseState } from '../components/HookUseState';
import { HooksNavigation } from '../components/HooksNavigation';
import { HookUseEffect } from '../components/HookUseEffect';
import { HookUseRef } from '../components/HookUseRef';
import { HookUseMemo } from '../components/HookUseMemo';
import { useProducts } from '../hooks/product';
import { Product } from '../components/Product';
import { HookUseCallback } from '../components/HookUseCallback';

export default function HooksPage() {
  return (
    <>
      <HooksNavigation />
      <Routes>
        {/* {/* <Route path='/set-state' element={<ProductsPage/>} /> */}
        <Route path="/useState" element={<HookUseState />} />
        <Route path="/useEffect" element={<HookUseEffect />} />
        <Route path="/useRef" element={<HookUseRef />} />
        <Route path="/useMemo" element={<HookUseMemo />} />
        <Route path="/useCallback" element={<HookUseCallback />} />
      </Routes>
    </>
  );
}
