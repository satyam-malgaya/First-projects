import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapAnimation = (animationType = 'fadeIn') => {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        try {
            switch (animationType) {
                case 'fadeIn':
                    gsap.fromTo(
                        element, { opacity: 0, y: 50 }, {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            scrollTrigger: {
                                trigger: element,
                                start: 'top 80%',
                                end: 'bottom 20%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                    break;

                case 'slideIn':
                    gsap.fromTo(
                        element, { x: -100, opacity: 0 }, {
                            x: 0,
                            opacity: 1,
                            duration: 1,
                            scrollTrigger: {
                                trigger: element,
                                start: 'top 80%',
                                end: 'bottom 20%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                    break;

                case 'scaleIn':
                    gsap.fromTo(
                        element, { scale: 0.8, opacity: 0 }, {
                            scale: 1,
                            opacity: 1,
                            duration: 1,
                            scrollTrigger: {
                                trigger: element,
                                start: 'top 80%',
                                end: 'bottom 20%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                    break;

                default:
                    console.warn(`Unknown animation type: ${animationType}`);
                    break;
            }
        } catch (error) {
            console.error('GSAP animation error:', error);
        }

        return () => {
            try {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            } catch (error) {
                console.error('Error cleaning up ScrollTrigger:', error);
            }
        };
    }, [animationType]);

    return elementRef;
};