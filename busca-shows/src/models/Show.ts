/* eslint-disable @typescript-eslint/no-explicit-any */
export class Show {
  id: number = 0;
  name: string = "";
  language: string = "";
  genres: string[] = [];
  status: string = "";
  premiereDate: Date | undefined = undefined;
  endDate: Date | undefined = undefined;
  channel: string = "";
  thumbURL: string = "";
  posterURL: string = "";

  constructor(obj: any) {
    Object.assign(this, obj);
  }

  static getInstance(show: any): Show {
    const {
      id,
      name,
      language,
      genres,
      status,
      premiered,
      ended,
      network,
      webChannel,
      image,
    } = show;

    const premiereDate = new Date(premiered);
    const endDate = new Date(ended);
    const channel = network ? network.name : webChannel.name;
    const thumbURL = image ? image.medium : "";
    const posterURL = image ? image.original : "";

    const newShow = new Show({
      id,
      name,
      language,
      genres,
      status,
      premiereDate,
      endDate,
      thumbURL,
      posterURL,
      channel,
    });

    return newShow;
  }
}
