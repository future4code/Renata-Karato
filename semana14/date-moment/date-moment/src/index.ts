import moment from "moment";
moment.locale("pt-br");

type event = {
  title: string,
  description: string,
  dateStart: moment.Moment,
  dateEnd: moment.Moment,
} 

const allEvents: event[] = [
  {
    title: "Dentista",
    description: "Restauração do dente",
    dateStart: moment("28/08/2020 16:00", "DD/MM/YYYY HH:mm"),
    dateEnd: moment("28/08/2020 17:00", "DD/MM/YYYY HH:mm")
  },
  {
    title: "Aula",
    description: "Aula parte da manhã",
    dateStart: moment("01/08/2020 9:00", "DD/MM/YYYY HH:mm"),
    dateEnd: moment("01/08/2020 11:30", "DD/MM/YYYY HH:mm")
  },
]

const printAllEvents = (events: event[]): void => {
  events.forEach((item: event) => {

    const duration = item.dateEnd.diff(item.dateStart, "minutes");
    const today = moment();
    const daysUntilEvent = item.dateStart.diff(today, "days");

    console.log
    (`
    Título: ${item.title}
    Horário de início: ${item.dateStart.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
    Horário de fim: ${item.dateEnd.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
    Descrição: ${item.description}
    Duração: ${duration} minutos
    Dias até o evento: ${daysUntilEvent} dias`);
  });
};

/* ---------------------------- EXERCÍCIO 2.B. ---------------------------------- */
// Para utilizar o horario de Londres, o fuso horario de Londres(+0100) deve ser colocado, assim acrescentaria 4h a mais ao fuso do BR;
// precisaria ser feito as seguintes alterações no console.log:


// Horário de início: ${item.dateStart.utcOffset("+0100").format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
// Horário de fim: ${item.dateEnd.utcOffset("+0100").format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}

const createEvent = (
  title: string,
  description: string,
  dateStart: moment.Moment,
  dateEnd: moment.Moment
  ): void => {
  if (!title || !description || !dateStart || !dateEnd) {
    console.log("Necessário preencher todos os campos!");
    return;
  }

  const diffDateStartAndToday = dateStart.diff(moment(), "seconds");
  const diffDateEndAndToday = dateEnd.diff(moment(), "seconds");

  if (diffDateStartAndToday < 0 && diffDateEndAndToday < 0) {
	console.log("Data não pode ser anterior a data presente!");
    return;
  }

  if(title && description && dateStart && dateEnd) {
    allEvents.push({
      title,
      description,
      dateStart,
      dateEnd
    });
    console.log("Evento criado com sucesso!")
    return;
  }
};

/* createEvent (
  "Corrida",
  "Corrida 5k em SP",
  moment("06/09/2020 8:00", "DD/MM/YYYY HH:mm"),
  moment("06/09/2020 8:30", "DD/MM/YYYY HH:mm")
) */

console.log(allEvents)