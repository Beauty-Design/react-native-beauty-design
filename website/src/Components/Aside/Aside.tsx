import { Text } from '@nextui-org/react';

import menu from '@/assets/v1.json';
import NavLink from '@/Components/NavLink';
import * as icons from '@/Components/Icons';

import { CollapseItemStyle, CollapseStyle } from './style';

const RenderIcon = ({ Component }: { Component?: any }) => {
  if (!Component) return null;
  return <Component className="text-xl" />;
};

type AsideProps = {
  titleClass?: string;
  t: (key: string, defaultValue?: string) => string | undefined;
};

const Aside = ({ titleClass, t }: AsideProps) => {
  return (
    <>
      <Text weight="bold" size="$xl" className={titleClass}>
        {t('docs:aside.title', 'Documentation')}
      </Text>

      {menu.map(({ children, name, key, icon }) => {
        return (
          <CollapseStyle
            shadow
            key={key}
            animated={false}
            divider={false}
            className="p-0 bg-transparent shadow-none"
          >
            <CollapseItemStyle
              expanded
              title={t(`docs:aside.${key}.name`, name)}
              // @ts-ignore
              contentLeft={<RenderIcon Component={icons[icon]} />}
            >
              {children.map(({ key: secondaryKey, name, path }) => {
                return (
                  <NavLink
                    key={secondaryKey}
                    href={path}
                    className="text-neutral-400"
                    activeCss={{
                      color: '$text !important',
                      fontWeight: '$bold'
                    }}
                  >
                    {t(`docs:aside.${key}.${secondaryKey}`, name)}
                  </NavLink>
                );
              })}
            </CollapseItemStyle>
          </CollapseStyle>
        );
      })}

      <div className="h-20 w-full" />
    </>
  );
};

export default Aside;
