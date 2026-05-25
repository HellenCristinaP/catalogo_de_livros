interface BookItemProps {
	_id?: string;
	titulo: string;
	autor: string;
	status: "Lido" | "Não lido";
}

export type { BookItemProps }