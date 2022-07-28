var nombre = prompt('Por favor ingresa tu nombre de usuario: ')
alert('Bienvenido/a '+nombre+'!')

var curso = prompt('¿Qué curso estas realizando en este momento?')

var totalUnidades = 13

var conPrevios = prompt('¿Tienes conocimientos previos en infosec? S/N')

var conRedes = prompt('¿Tienes conocimientos en redes? S/N')

var conLinux = prompt('¿Utilizas o utiizaste alguna distribución Linux? S/N')

var maqVirtual = prompt('¿Sabés sobre virtualización de máquinas y en qué se emplean? S/N')

function mostrar(box_ini) {

	var box = document.getElementById(box_ini)

	if(box.style.display == 'none') {
		box.style.display = 'block'
	} else {
		box.style.display = 'none'
	}	
}

function mostrar_box(box_m) {
	var box = document.getElementById(box_m)
	box.style.display = 'block'
}

function ocultar_box(box_o) {
	var box = document.getElementById(box_o)
	box.style.display = 'none'
}	