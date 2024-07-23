import React from 'react';
import { motion } from 'framer-motion';
import PlanCard from '../components/PlanCard';
import './planos.css'; // Vamos criar os estilos depois

const Planos = () => {
  const plans = [
    {
      title: 'PLANO MENSAL',
      price: '75,00',
      features: [
        'Treino liberado 1x por dia na unidade',
        'Sem taxas extras',
        '1 mês de validade',
        'Acesso a musculação e crossfit'
      ]
    },
    {
      title: 'PLANO TRIMENSAL',
      price: '225,00',
      features: [
        'Treino liberado 1x ou mais por dia',
        '3 meses de validade',
        'Acesso a musculação e crossfit'
      ]
    },
    {
      title: 'PLANO DIÁRIO',
      price: '12,00',
      features: [
        'Treino liberado 1x por dia na unidade',
        'Acesso a todas as aulas coletivas',
        'Acesso a musculação e crossfit'
      ]
    }
  ];

  return (
    <motion.div
      className="planos"
      id="planos"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="separator"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div> {/* Linha separadora */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Comece a <span className="amarelo">treinar</span> hoje mesmo
      </motion.h1>
      <div className="plan-cards">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 * (index + 1) }}
          >
            <PlanCard {...plan} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Planos;
