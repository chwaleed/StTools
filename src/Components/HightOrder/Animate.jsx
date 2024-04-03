import React, { Component } from "react";
import { motion } from "framer-motion";

const Animate = (Component) =>
  function HOC() {
    return (
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Component />
      </motion.div>
    );
  };

export default Animate;
