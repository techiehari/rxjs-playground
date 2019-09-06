import { PlaygroundViewModel } from "./ViewModels/PlaygroundViewModel";
import {
	SerializeController,
	StringStore,
	UrlHashOrPostMessageStore,
} from "./ViewModels/SerializeController";
import { computed, action } from "mobx";

export class Model {
	public readonly playground = new PlaygroundViewModel();
	private readonly store: StringStore = new UrlHashOrPostMessageStore();

	@computed get selectedDemo(): Demo | undefined {
		return demos.find(d => d.serializedData === this.store.get());
	}

	@action
	setDemo(demo: Demo): void {
		this.store.set(demo.serializedData);
	}

	public readonly demos = demos;

	constructor() {
		new SerializeController(this.playground, this.store);
	}
}

export interface Demo {
	name: string;
	serializedData: string;
}

const demos: Demo[] = [
	{
		name: "delay",
		serializedData:
			"XQAAAAK_AQAAAAAAAABJINBuYDZsN5YTW6OHrMtN89ZdV25aFV-TlxujY6_B2yiluwYypyoRv82V4xDsvXgTGAcdgyBDJYQMNYmL8Er0i0AS0nT-aCxI4mFvK4dz_dhuNamE0PzbQlpxOKZ6W1rN6AqvRT7N5BCBXe4hLsoOhfqOVNfvt0QgnHTE0VG3pYpyUZeVp_YdD84n1RiVn1nOYZYxExyT8HrYbsd6ZjvSOEGEr5RDvhOvck6G1pHpdY6c_l0Rs9DCGxyPQ9XoSXDqBIqtc7aauhOL3EdhONtYnsK1w5jvRpPVySUg5bLMrwYPmcXqQ-2R8POB_VSXHOCbRXuRY1hokQb1Bm8dISB1_SwIQO-Mc1Nux__iU3R_",
	},
	{
		name: "merge",
		serializedData:
			"XQAAAAKzAgAAAAAAAABJoNBuYDZsN5YTW6OHrMtN89Y1bRpaFU6LpxujY6_62_sGCBGhggMKHkHaLvxThe6noA8ty8yc0tyZDoJiTijOH2pSZh0Q6JFdySlh1w47pXgZPkHAIbuHU8BzSQ3fU8og2jc-ehwGly8LUcQWHjKYQuoqyk6mRu5nVK3Lc_3zkLZ-kcdTH_PiltY8usC_oT9vNUC5wjV52nkRJniqvih83Yndz51g8KYax2QCa6oDsOMpB0HFzg8BBstKzJ3f1gtBIrChJvTnRJQg1afWBIYpWXP55d5FoMDhshanGIHr8kT5dP2o93wVjfUFxKwyAtjLas4PJ3wUf6XK9KCjnaTOfLTbufotkickARFYH2ZuLc9vrRxX-xgDbzDujTUevDdSW3pjONfhWou4zUJcEP_BgsAA",
	},
	{
		name: "groubBy",
		serializedData:
			"XQAAAAIXAwAAAAAAAABJIRBuYDZsN5YTW6OHrMtN89Z7RhGEaF6YnWUr_dplnzzkx8k3a4BftTzMxq321iiHa48lwnnzUsEXQu5h8Wq6a5AnJSlgG5tL4DZaygdCn30FtG1gmm5HuTUlaFTKjK7BcxaqCAZTkhntSgf4p1lHvBxCC3s7Ay6ozPHBBargAYHvvuw3zzY5xTjT7p5uUAOpL2BC5PeyexERh1LmqoEO1oix_BCztrpkkYtMo4aItMhyPgaHAefen6Dkzf6nI8GFI2mg6GvQfPiXnrqOo8sF2eZUlmSgMM9ObWDM96jsprKYrKmSlgi3qiynORs66F2BqhILvBJmPxHyH2hnLV-14leTOkYulyS6yUa1fCRa3Mo_e1TcsaSa1LPm156v21lX1-7X_NqSosfYxfAKZCqkja0XLQ6U-G9Oo86TJ7ytW7wtCjB_1-iu8fwiX4q3Ok3szwKynuZOJhf3c_C7acHP_8boAGA",
	},
	{
		name: "scan (Async Reduce)",
		serializedData:
			"XQAAAAIyAgAAAAAAAABJIRBuYDZsN5YTW6OHrMtN89ZxS3nDaEaGgWUr_c01-p_9x4Zbjd6s7Rn7TqLwjYtVN2WsjgoL8vITx1X1K4y8qn4odZewdlTEkqC7oPm4A9Y7WHrN7kwleiG3SdJmdhNaoiS_ZSt89smayShBd3l3TALr_JlILvqK82T8p8-aD6LO4uhdBZs2MeVV6wXj7-l2UdS9eAs6vQuDfiQKyiCpQTyhojUvhSlgbbKGFqDqebnb98AwneM0byICaEdWdzpBw-3T3EHBIleRfgfbcM2dfIW3W1vFogZXqzNOKdiGu117DVeX9wBzGY7pUq7WxMGkUFoORKZEA_5oCVjl6FOQ4DLybx8j5Cd5nKez6ARN-SZAHCL_GuRclDorkpxd9yOBeneQkFKZ8Nyh6KNh4zadE1zghDNZQ8HwS9Uj__JaBW8",
	},
	{
		name: "reduce (Sync Reduce)",
		serializedData:
			"XQAAAAI0AgAAAAAAAABJIRBuYDZsN5YTW6OHrMtN89ZxS3nDaEaGgWUr_c01-p_9x4Zbjd6s7Rn7TqLwjYtVN2WsjgoL8vITx1X1K4y8qn4odZewdlTEkqC7oPm4A9Y7WHrN7kwleiG3SdJmdhNaoiS_ZSt89smayShBd3l3TALr_JlILvqK82T8p8-aD6LO4tS5cCb7uafSzOyyBXakttfMSjSKdWgBqLBNREPpLVbSKG07X-kQ2SZxM8bPz-UbkfPQpb-HLCeZ-7tS4BQZ0Dc_wRdhbyRLdhj18gZadDBhCsnPEDNfmXY3-U1C9ScuCa0wnPkb2hpKd0_MZqtTWATaY4STIKYg_U_wf7U3-c2Kki9mV2QWI414TF5p_8dQ6TX_GE8N9wbPVP0Tgxh2mAEArt_HzOeKUaY08cEuuFxgNVOL6UC0cgUVo__2Qdrx",
	},
	{
		name: "map, mergeMap, switchMap, concatMap",
		serializedData:
			"XQAAAAI9BgAAAAAAAABLIRBuYDZsN5YTW6OHrMtN89YrcWnDaEaGgWUr_dpRGkoEx8cSoA3LdOTjNGPkr77aiUEJerRDsjssFdTJjZcYBV2G3yDJB8v8PSXliz4gqdGmDUEeqpiY5v2WvDloPlOlca48ONoNPpqR6MfpYounOL78PfqSXL91U4X7d6FNTBIx7bKiPi7-fWzqyIhQXmpd2HgSfA719Qlx8t-sxWD_P2PbwPBvrSgYheBaYWDegYPMibI01y4eYwKnoKfvG_o50pYl1Y5E3HrSIsC2XkF-b4gOMZBWLZNO2182dYxh0snvfyxhtGbAeZnrREKy6oVIUoi05noQ8OLWc5P2gT2XUeUW9GS0Rh0zja3oNgPgVlSfsmdfBkShVDnJc48C2z0Nw993CN3_4nrX8IfgifxfmPWoM45-54l4-SCOTmPk0nVRmjUldSxaXr23veS_hLAWyam6ejyHWIgQ1xJgFPLEVBRUlbBiztExI4e-Ztq6BSb2h5GqW2Qt22JtTRD_SB7OAA",
	},
];
