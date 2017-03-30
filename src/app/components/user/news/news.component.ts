import { Component, AfterViewInit } from '@angular/core'
import {NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';

@Component ({
	selector: 'my-news',
	templateUrl: 'news.component.html',
	providers: [NgbDatepicker],
	styleUrls: [
	'./../my_observations/my_observations.style.css',
	//'../user_banner.css'
	]
})

export class NewsComponent implements AfterViewInit{
	//model;


	public listelem:any;
	public tabVisibility= new Array(0);
	public tabVisibilityPrev= new Array(0);
	public nbElem:string="none";

	constructor(config: NgbDatepicker) {
		this.listelem = [{"FilContent":"S1","ObsList":["1","2","3"]},{"FilContent":"I1","ObsList":["1","2","3"]}];
	}

	public overstatus="no";

	showOver(elem:string){
		this.tabVisibilityPrev = Object.assign({},this.tabVisibility);
		this.overstatus = "yes";
		this.show(elem);
		this.tabVisibility = Object.assign({},this.tabVisibilityPrev);
		//this.tabVisibility.push({"#S0_obs0":"show"});
	}

	showClick(elem:string){
		this.overstatus = "no";
		this.show(elem);
	}

	backOver()
	{
		if(this.overstatus == "yes")
			this.applyVisibility(this.tabVisibilityPrev);
		this.overstatus = "no";
		//this.tabVisibility = Object.assign({},this.tabVisibilityPrev);
	}

	applyVisibility(tabV:Array<Object>){
		let tabVisibilityIds = Object.keys(tabV);
		// alert("this.tabVisibilityIds length = "+  tabVisibilityIds.length);


		let i;
		for(i=0;i<tabVisibilityIds.length;i++)
		{
			// alert(tabVisibilityIds[i]+":"+this.tabVisibility[tabVisibilityIds[i]]);
			if(tabV[tabVisibilityIds[i]]=="show")
				$(tabVisibilityIds[i]).show();
			else
				$(tabVisibilityIds[i]).hide();
		}
	}

	show(elem:string){
		//alert(this.nbElem);
		let sortie = elem.split("_")[0];
		let imgNum = elem.split("_")[1];


		let s,o;
		for(s=0;s<this.listelem.length;s++)
		{
			if(this.listelem[s].FilContent == sortie)
			{
				$("#"+this.listelem[s].FilContent).hide();
				this.tabVisibility["#"+this.listelem[s].FilContent]="hide";
				for(o=0;o<this.listelem[s].ObsList.length;o++)
				{

					if(this.listelem[s].ObsList[o] == imgNum)
					{
						// $("#"+sortie+"_obs"+imgNum).show();
						// $("#"+sortie+"_obs"+imgNum+"Details").show();
						this.tabVisibility["#"+sortie+"_obs"+imgNum]="show";
						this.tabVisibility["#"+sortie+"_obs"+imgNum+"Details"]="show";
						if(this.overstatus == "no")
						{
							$("#"+this.listelem[s].FilContent+"_img"+this.listelem[s].ObsList[o]).addClass('icon-active');
						}

					}
					else
					{
						if(this.overstatus == "no")
						{
							$("#"+this.listelem[s].FilContent+"_img"+this.listelem[s].ObsList[o]).removeClass('icon-active');
						}
						// $("#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o]).hide();
						// $("#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o]+"Details").hide();
						this.tabVisibility["#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o]]="hide";
						this.tabVisibility["#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o]+"Details"]="hide";
					}
				}
			}
		}
		this.applyVisibility(this.tabVisibility);
		/*$("#S1").hide();
		$("#S1_obs1").hide();
		$("#S2_obs2").hide();
		$("#S3_obs3").hide();
		$("#S1_obs1Details").hide();
		$("#S2_obs2Details").hide();
		$("#S3_obs3Details").hide();
		$("#S"+sortie+"_obs"+imgNum).show();
		$("#S"+sortie+"_obs"+imgNum+"Details").show();

		*/
		// $("#S1_img1").removeClass('icon-active');
		// $("#S1_img2").removeClass('icon-active');
		// $("#S1_img3").removeClass('icon-active');
		// $("#"+sortie+"_img"+imgNum).addClass('icon-active');
	}


	ngAfterViewInit() {

		$( document ).ready(function() {//permet d'attendre le chargement des composants fils!
			//Leftpanelfixed se fixe quand le scroll positionne en au le panel (et inversement)
			let fixedNavTop = 54; //Si la nav principale est fixed, la prendre en compte (dans la CSS aussi)

			let topelement = $('#leftpanelfixed').offset().top;

			//Dimensionner la hauteur du panneau des espèces en fonction de la fenetre
			let hwin = $(window).height();
			let hoverflowInPanel = $('#overflowfix').offset().top - topelement;
			$('#overflowfix').height(hwin-hoverflowInPanel-fixedNavTop);
			//alert("hwin="+hwin+", hoverflowInPanel="+$('#overflowfix').offset().top+"-"+topelement+",overflowfix H="+$('#overflowfix').height()+"newH="+(hwin-hoverflowInPanel));

			//initialisation si le scroll est déjà bas
			if($(window).scrollTop()>topelement-fixedNavTop)
			{
				//console.log('bat => fixe');
				if(!$('#leftpanelfixed').hasClass("fixed"))
					$('#leftpanelfixed').addClass("fixed");
			}
			else{
				//console.log('haut => non fixe');
				if($('#leftpanelfixed').hasClass("fixed"))
					$('#leftpanelfixed').removeClass("fixed");
			}


			//Mise à jour de l'état du panneau fixe selon le scroll
			$(window).scroll(function()
			{
				/*//verification de la taille, ca déconne parfois...
				if($('#overflowfix').height()<11)
				{
					var newH = $(window).height()-($('#overflowfix').offset().top - $('#leftpanelfixed').offset().top);
					//alert("hwin="+hwin+", hoverflowInPanel="+$('#overflowfix').offset().top+"-"+topelement+",overflowfix H="+$('#overflowfix').height()+"newH="+(hwin-hoverflowInPanel));
					$('#overflowfix').height(newH);
				}*/
				this.scrollTop = $(window).scrollTop();

				if($(window).scrollTop()>topelement-fixedNavTop)
				{
					//console.log('bat => fixe');
					if(!$('#leftpanelfixed').hasClass("fixed"))
						$('#leftpanelfixed').addClass("fixed");
				}
				else{
					//console.log('haut => non fixe');
					if($('#leftpanelfixed').hasClass("fixed"))
						$('#leftpanelfixed').removeClass("fixed");
				}
			});

		});


		//this.tabVisibility.push({"sortie":"S1", "visibility":"show"});
		//alert(this.tabVisibility[0].sortie);
		// alert(this.listelem.length + "_" + typeof this.listelem);


		//alert("listelem.length"+this.listelem.length);
		let s,o;
		for(s=0;s<this.listelem.length;s++)
		{

			this.tabVisibility["#"+this.listelem[s].FilContent]="show";
			// alert("tabVisibility"+ "#"+this.listelem[s].FilContent+" = "+this.tabVisibility["#"+this.listelem[s].FilContent]);

			// $("#"+this.listelem[s].FilContent).show();
			//alert(this.listelem[s].ObsList.length);
			for(o=0;o<this.listelem[s].ObsList.length;o++)
			{

				let id_elem = "#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o];
				let visibility = "hide"
				// alert(id_elem+":"+visibility);

				this.tabVisibility[id_elem]="hide";
				this.tabVisibility[id_elem+"Details"]="hide";
				//alert("tabVisibility"+ "#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o] + " "+ this.tabVisibility["#"+this.listelem[s].Sortie+"_obs"+this.listelem[s].ObsList[o]]);
				//alert("tabVisibility"+ "#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o]+"Details" + " "+ this.tabVisibility["#"+this.listelem[s].Sortie+"_obs"+this.listelem[s].ObsList[o]+"Details"]);
				// $("#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o]).hide();
				// $("#"+this.listelem[s].FilContent+"_obs"+this.listelem[s].ObsList[o]+"Details").hide();

			}
		}
		this.tabVisibilityPrev = Object.assign({},this.tabVisibility);
		this.applyVisibility(this.tabVisibility);
		// let tabVisibilityIds = Object.keys(this.tabVisibility);
		// alert("this.tabVisibilityIds length = "+  tabVisibilityIds.length);
		// this.nbElem = tabVisibilityIds.length.toString(); //alert("nbelem"+ this.nbElem);
			/*$("#Obs1Info").hide();
			$("#Obs2Info").hide();
			$("#Obs3Info").hide();
			$("#Obs1Details").hide();
			$("#Obs2Details").hide();
			$("#Obs3Details").hide();*/






		}
	}
