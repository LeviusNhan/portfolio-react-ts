import { motion } from "motion/react";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function PageTransition({ children }: Props) {
    return (
        <motion.main
            initial={{
                opacity: 0,
                x: 120,
                scale: 0.98,
                filter: "blur(14px)",
            }}
            animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "blur(0px)",
            }}
            exit={{
                opacity: 0,
                x: -120,
                scale: 0.98,
                filter: "blur(14px)",
            }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1], // easeOutExpo
            }}
            className="min-h-screen"
        >
            {children}
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0,
                }}
                exit={{
                    opacity: .18,
                }}
                transition={{
                    duration: .35,
                }}
                className="
        pointer-events-none
        fixed
        inset-0
        z-[999]
        bg-gradient-to-r
        from-[#C778DD]/20
        via-transparent
        to-cyan-400/20
    "
            />
        </motion.main>

    );
}

export default PageTransition;