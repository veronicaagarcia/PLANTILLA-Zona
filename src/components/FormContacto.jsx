import { useState } from "react";
// Para manejar los email
import emailjs from "emailjs-com";
// Para manejar las alertas de exito o error de envio de correo
import Swal from "sweetalert2";

export function FormContacto() {
	const [nombre, setNombre] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState(
		`¡Hola! 
        Me gustaría recibir más información sobre: `
	);
	const [emailError, setEmailError] = useState("");
	const [messageError, setMessageError] = useState("");

	const handleNombreChange = (event) => {
		setNombre(event.target.value);
	};
	const handleTelefonoChange = (event) => {
		setTelefono(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handleMessageChange = (event) => {
		setMessage(event.target.value);
	};

	// Funcion para validar el formato del correo electronico
	const validateEmail = (email) => {
		const re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	// Funcion de onClick en enviar formulario
	const handleSubmit = async (event) => {
		event.preventDefault();

		// Validar el correo electronico
		if (!validateEmail(email)) {
			setEmailError("Por favor ingrese un correo electrónico válido");
			return;
		} else {
			setEmailError("");
		}

		if (message.trim() === "") {
			// Mostrar un mensaje de error al usuario
			setMessageError("Por favor ingrese su mensaje");
			return; // Salir de la funcion si el campo de mensaje esta vacio
		} else {
			setMessageError("");
		}

		// Enviar correo electronico usando EmailJS
		try {
			await emailjs.send(
				"service_132e1rk", // Reemplazar con el Service ID de EmailJS de INNOVATEProweb
				"template_d9ddl99", // Reemplaza con el Template ID de EmailJS de INNOVATEProweb
				{
					from_name: email,
					to_email: "info@innovateproweb.com", // Reemplaza con el correo electronico de INNOVATEProweb
					nombre: nombre,
					telefono: telefono,
					message: message,
					email: email,
				},
				"O0emMGRnQKO5OUeMi" // Reemplaza con el User ID (que ahora seria publick_key) de EmailJS de INNOVATEProweb
                
			);
			// Mostrar mensaje de éxito al usuario usando Swal.fire
			Swal.fire({
				position: "center",
				icon: "success",
				iconColor: "#2fab73",
				title: "Consulta enviada con éxito",
				text: "A la brevedad nos estaremos comunicando con usted.",
				customClass: {
					confirmButton:
						"bg-COLOR2 hover:bg-COLOR3 text-base md:text-lg py-4 px-6 rounded-md text-CBACKGROUND",
				},
				buttonsStyling: false,
			});
			// Borrar campos completados
			setNombre("");
			setTelefono("");
			setEmail("");
			setMessage("");
		} catch (error) {
			console.error("Error al enviar el correo electrónico:", error);
			// Mostrar mensaje de error al usuario usando Swal.fire
			Swal.fire({
				icon: "error",
				iconColor: "#FF3366",
				title: "Error al enviar su consulta",
				text: "A la brevedad lo estaremos solucionando, disculpe las molestias.",
				customClass: {
					confirmButton:
						"bg-COLOR2 hover:bg-COLOR3 text-base md:text-lg py-4 px-6 rounded-md text-CBACKGROUND",
				},
				buttonsStyling: false,
			});
		}
	};

	return (
		<section className='w-full bg-black/60 shadow-lg shadow-COLOR1 h-fit p-6 md:w-11/12 xl:w-10/12 lg:rounded-md mb-2 md:mb-4 xl:mb-10'>
			<form
				onSubmit={handleSubmit}
				className='mx-auto flex flex-wrap items-center w-full md:w-11/12 xl:w-10/12'
			>
				
				<div className='flex flex-col w-full max-w-96 md:w-full md:max-w-none mx-auto h-fit items-start mb-2 md:mb-3 lg:mb-4'>
					<label
						for='nombre'
						className='text-white'>
						Nombre o empresa
					</label>
					<input
						id='nombre'
						type='text'
						value={nombre}
						name={nombre}
						onChange={handleNombreChange}
						className='h-[50px] px-4 w-full md:border-3 md:h-14 rounded-md'
					/>
				</div>
				
				<div className="w-full flex flex-wrap ">
					<div
						className='flex flex-col w-full max-w-96 md:w-1/2 mx-auto h-fit items-start mb-2 md:mb-3 lg:mb-4'>
						<label
							for='telefono'
							className='text-white'
						>
							Teléfono 
						</label>
						<input
							id='telefono'
							type='text'
							value={telefono}
							onChange={handleTelefonoChange}
							className='h-[50px] px-4 w-full md:border-3 md:h-14 rounded-md'
						/>
					</div>
					<div
						className='flex flex-col w-full max-w-96 md:w-1/2 mx-auto h-fit items-start mb-2 md:mb-3 lg:mb-4'
					>
						<label
							for='email'
							className='text-white'
						>
							Email
						</label>
						<input
							id='email'
							type='email'
							value={email}
							onChange={handleEmailChange}
							className='h-[50px] px-4 w-full md:border-3 md:h-14 rounded-md'
						/>
						{emailError && (
							<p
								className='text-COLOR3 bg-CBACKGROUND w-full rounded-md text-center my-2 p-2 text-sm md:text-base md:my-3 md:p-3 xl:my-4 xl:p-4'
							>
								{emailError}
							</p>
						)}
					</div>
				</div>
				<div className="w-full flex flex-col">
					<div
						className='flex flex-col w-full max-w-96 md:max-w-[840px] mx-auto h-fit items-start mb-4 md:mb-5 lg:mb-6'
					>
						<label
							for='message'
							className='text-white'
						>
							Mensaje o consulta
						</label>
						<textarea
							id='message'
							value={message}
							onChange={handleMessageChange}
							className='p-4 min-h-[180px] text-black/60 font-thin w-full md:border-3 md:p-6 rounded-md'
						/>
						{messageError && (
							<p
								className='text-COLOR3 bg-CBACKGROUND text-center my-2 p-2 w-full rounded-md md:my-3 md:p-3 xl:my-4 xl:p-4'>
								{messageError}
							</p>
						)}
					</div>
					<button
						type='submit'
						className="mx-auto text-CBACKGROUND hover:cursor-pointer bg-COLOR1 hover:bg-COLOR2 rounded-md w-[230px] md:w-[250px] xl:w-[280px] h-[45px] md:h-[55px] xl:h-[65px] text-center items-center"
					>
						Enviar
					</button>
				</div>
			</form>
		</section>
	);
}