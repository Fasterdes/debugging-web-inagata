import { motion } from 'framer-motion';
import React from 'react';
import tw from 'twin.macro';
const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
};

const LogoWinden = () => {
  return (
    <span tw="mb-1">
      <motion.svg width="116" height="28" viewBox=" 0 0 116 30" fill="none" xmlns="http://www.w3.org/2000/svg" tw="stroke-current stroke-1 text-white">
        <motion.path
          d="M.712 8.315H2.96L7.875 26l5.026-17.686h2.36l4.997 17.63 4.915-17.63h2.249L21.48 29h-2.36l-5.053-17.714L9.013 29h-2.36L.712 8.315zm29.164 5.803h2.082V29h-2.082V14.118zm-.306-3.915c0-.389.13-.713.389-.972.26-.259.583-.389.972-.389.388 0 .712.13.971.39.26.258.39.582.39.97 0 .39-.13.714-.39.973-.259.259-.583.388-.971.388-.389 0-.713-.13-.972-.388a1.319 1.319 0 01-.389-.972zm6.65 3.915h2.083v1.832a4.45 4.45 0 011.777-1.582 5.4 5.4 0 012.499-.583c1.036 0 1.98.24 2.832.722a5.187 5.187 0 011.999 1.999c.5.851.75 1.795.75 2.832V29h-2.083v-8.857c0-1.333-.352-2.379-1.055-3.138-.703-.758-1.638-1.138-2.804-1.138s-2.11.389-2.832 1.166c-.722.76-1.083 1.796-1.083 3.11V29H36.22V14.118zm22.636 15.215c-1.388 0-2.638-.333-3.748-1-1.111-.684-1.99-1.619-2.638-2.804-.63-1.184-.944-2.508-.944-3.97 0-1.462.314-2.786.944-3.97.63-1.185 1.5-2.11 2.61-2.777 1.129-.685 2.388-1.027 3.776-1.027 1.148 0 2.184.231 3.11.694a6.127 6.127 0 012.332 1.888V7.982h2.082V29h-2.082v-2.416a5.826 5.826 0 01-2.305 2.027c-.944.482-1.99.722-3.137.722zm-5.109-7.774c0 1.073.222 2.045.666 2.915a5.38 5.38 0 001.888 2.027c.796.5 1.685.75 2.666.75a5.05 5.05 0 002.693-.75 5.255 5.255 0 001.916-2.055c.481-.87.722-1.832.722-2.887s-.24-2.018-.722-2.888a5.256 5.256 0 00-1.916-2.054 5.05 5.05 0 00-2.693-.75c-.981 0-1.87.25-2.666.75a5.327 5.327 0 00-1.888 2.054c-.444.852-.666 1.814-.666 2.888zm23.684 7.774c-1.37 0-2.62-.333-3.749-1a7.328 7.328 0 01-2.665-2.804c-.648-1.203-.972-2.545-.972-4.026 0-1.462.305-2.776.916-3.942.63-1.185 1.49-2.11 2.582-2.777 1.093-.666 2.314-1 3.665-1 1.37 0 2.573.334 3.61 1a6.688 6.688 0 012.388 2.638c.574 1.092.86 2.24.86 3.443 0 .463-.037.907-.11 1.333H72.237c.019 1.036.269 1.952.75 2.748a5.256 5.256 0 001.916 1.805 5.282 5.282 0 002.527.639c1.943 0 3.461-.907 4.553-2.721l1.777.944c-.481 1.055-1.296 1.943-2.443 2.665-1.13.704-2.425 1.055-3.887 1.055zm4.386-9.08c0-.85-.212-1.619-.638-2.304a4.292 4.292 0 00-1.666-1.638 4.686 4.686 0 00-2.305-.583 4.98 4.98 0 00-2.304.556 5.002 5.002 0 00-1.777 1.582c-.463.685-.74 1.48-.833 2.388h9.523zm5.921-6.135h2.082v1.832a4.45 4.45 0 011.777-1.582 5.4 5.4 0 012.5-.583c1.036 0 1.98.24 2.831.722a5.187 5.187 0 012 1.999c.5.851.75 1.795.75 2.832V29h-2.083v-8.857c0-1.333-.352-2.379-1.055-3.138-.704-.758-1.639-1.138-2.805-1.138-1.166 0-2.11.389-2.832 1.166-.722.76-1.083 1.796-1.083 3.11V29h-2.082V14.118z"
          fill="#fff"
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: 'easeInOut' },
            fill: { duration: 3, ease: [1, 0, 0.8, 1] },
          }}
        />

        <path d="M109.557 29c-.592 0-1.092-.194-1.499-.583-.389-.407-.583-.907-.583-1.5 0-.573.194-1.055.583-1.443.407-.407.907-.611 1.499-.611.574 0 1.055.194 1.444.583.389.389.583.88.583 1.472s-.194 1.092-.583 1.499c-.37.389-.851.583-1.444.583z" fill="#ADFD96" />
      </motion.svg>
    </span>
  );
};

export default LogoWinden;
