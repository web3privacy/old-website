import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
    link?: string;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Manifesto',
        Svg: require('@site/static/img/manifesto.svg').default,
        description: (
            <>
                Research project ideological foundation.
            </>
        ),
        link:'/docs/manifesto'
    },
    {
        title: 'Roadmap',
        Svg: require('@site/static/img/roadmap.svg').default,
        description: (
            <>
                Forthcoming activities that will empower humans & industry privacy-level.
            </>
        ),
        link:'/docs/roadmap'
    },
    {
        title: 'Pagency',
        Svg: require('@site/static/img/pagency.svg').default,
        description: (
            <>
                Tool to facilitate impactful privacy-enhancing ideas & raise privacy culture in web3.
            </>
        ),
        link:'/docs/pagency'
    },
];

function Feature({link, title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                {link ? (
                    <Link to={link}>
                        <Svg className={styles.featureSvg} role="img"/>
                    </Link>
                ) : (
                    <Svg className={styles.featureSvg} role="img"/>
                )
                }
            </div>
            <div className="text--center padding-horiz--md">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
