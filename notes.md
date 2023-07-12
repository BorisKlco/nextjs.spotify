- Reset globals.css, tailwind.config
- Pridanie noveho fontu pre layout.tsx, edit metadata
- Vytvorenie root priecinku pre komponenty

---

- Vytvorenie prveho komponentu, Sidebar.tsx
- Sidebar obsahuje div cez ktoreho ide props {children} , children je ReactNode
- Sidebar som pouzil pre layout, kde som wrapol main children
- Sidebar je client komponent, pre dynamicke zobrazovanie user kontentu
  - Pre Sidebar som pouzil `usePathname` - next/navigation, je to client hook ktory ma pristup ku aktualnej URL
  - Vytvoril som const routes kde som pouzil `useMemo` v ktorom je array, objectov.
  - Kazdy object ma nazov, active status ktory ma podmienku ci sa pathname = / != search url a custom href.
  - dependency pre `useMemo` je zmena v `pathName`
- Vytvorenie komponentu `Box` ktory je wrapper pre children v `Sidebar` , do ktoreho sa passuju hodnoty `children` a `className`
- Instalacia tailwind-merge ktory pouzijem v `Box`
- Do prveho boxu som pridal `routes.map()` ktory za kazdy object v `routes` array vytvori `SidebarItem` komponent
  - `SidebarItem` returnuje `Link` ktory pouziva spreadnute props z `routes` active status je podmienka ktora je v `className`
  - Vytvorenie podmienky pre `SidebarItem` Icon , ked sa meni react-icon na zaklade active statusu
- v `Sidebar` sa nachadzaju dva `Box` kontainery, v prvom sa nachadzaju `Link` a vruhom ktory ma `h-full` sa nachadza komponent `Library`
  - `Library` je `'use client'` komponent, ktory ma viacero fukncii, ako aj uploadovanie.
    - Zaklad je div ktory je `flex-col` , v nom wrapnuty je dalsi `flex` div ktory ma x,y padding a je `justify-between`
      - Nasledujuci `inline-flex` div drzi iconu a nadpis.'
      - Na druhej strane vdaka `justify-beween` sa nachadza react-icon reprezentujuca `+` a `onClick` event `handleUpload`
    - Pod vytvorenim napdisom pridavam dalsi `flex-col` div ktory ma `margin-top` a `x-padding` bude drzat playlist.

---

- Vytvoril som `Header` wrapper ktory som pouzil v `page.tsx`, `Header` berie argument `{children}` a `{className}`.
  - `Header` je client komponent, pouzil som `next/navigation useRouter()` na navigaciu medzi playlistom.
    - Prvy div wrapper je `h-fit` a vytvoreny gradient a padding nasledne berie argument `className?`
      - Dalsi `flex justify-between` div ma `w-full`, `margin-button` a obsahuje div pre navigacne buttony.
        - div wrapper je `hidden` pre mobilne zariadenia a pre `md: flex` ma `x-gap` a centrovane itemy, obsahuje 2 `NavigationButton` komponenty
          - `NavigationButton` berie 3 props, a to je `react-icon` a `onClick` handler a `className`, v tonto pripade `router.forward()` a `router.back()`
          - `navigationButton` som upravil tak aby bral argument pre vsetko a zaroven som pridelil kazdemu argumentu default value ak by value nobola poskutnuta, argumenty su `react-icon`, velkost pre iconu, `className` pre iconu a pre button, a `onClick` handler.
      - pre mobile view je vytvoreny `NavigationButton` ktory ma `GoHome` icon a `BiSearchAlt` nahrazduju navigacne buttony a reprezentuju navigaciu z hidden left navbaru.
    - Zatial odlozim vytvorenie custom buttonu pre pravu stranu navigacie reprezentujucu `Sign up` a `Log In`. Pouziva `forwardRef` o ktorom si musim precitat a vidiet ho ako bude pouzity 42:15 timestamp.
      -Pridanie `{children}`
