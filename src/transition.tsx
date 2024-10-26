import { motion } from "framer-motion";
import { ComponentType } from "react";

export function transition(OriginalComponent: ComponentType) {
    return (
        <>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} // Initial state for animation
                animate={{ opacity: 1, scale: 1 }}  // Target state for animation
                transition={{
                    type: "spring",
                    mass: 1,
                    stiffness: 80,
                    damping: 20,
                }}  // Spring-based transition from Figma
                style={{ width: "100vw", height: "100vh" }} >
                <OriginalComponent />
            </motion.div>
        </>
    );
}