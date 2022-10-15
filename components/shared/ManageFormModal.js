import { useState } from 'react';
import { motion } from "framer-motion";
import MailSentModal from '../MailSentModal';

function ManageFormModal() {

    const [showModal, setShowModal] = useState(false);

    function ShowFormModal() {
        if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
        return (
            <motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		> 
        
        
        
        
        </motion.nav>
        )    
    }










}
