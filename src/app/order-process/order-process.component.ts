import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // import FormsModule

@Component({
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrls: ['./order-process.component.css']
})
export class OrderProcessComponent implements OnInit {
  subscriptionPlans = [
    {
      "duration_months": 3,
      "price_usd_per_gb": 3
    },
    {
      "duration_months": 6,
      "price_usd_per_gb": 2.5
    },
    {
      "duration_months": 12,
      "price_usd_per_gb": 2
    }
  ];
  totalPrice = 0;

  steps = [
    {
      "id": 1,
      "text": "subscription parameters"
    },
    {
      "id": 2,
      "text": "Payment data"
    },
    {
      "id": 3,
      "text": "Confirmation"
    }
  ];

  subscription = {
    duration: 12,
    amount: 5,
    upfrontPayment: false
  };

  payment = {
    cardNumber: '',
    expirationDate: '',
    securityCode: ''
  };
  pricePerGB: number | undefined;;
  termsAccepted : boolean = false;
  email : string = "";

  

  
  onSubmit() {
    console.log(this.email);
    console.log(this.termsAccepted);
    
  }
  constructor() {
  }
  step : number = 1 ; 
  ngOnInit(): void {
    this.updatePrice();
  }

  NextStep(){
    this.step++
  }
  PrevStep(){
    this.step--
  }

  updatePrice(): void {
    const selectedPlan = this.subscriptionPlans.find(p => p.duration_months == this.subscription.duration);
    console.log(selectedPlan);
    
    this.pricePerGB = selectedPlan ? selectedPlan.price_usd_per_gb : 0;
    let totalPrice = this.pricePerGB * this.subscription.amount;

    if (this.subscription.upfrontPayment) {
      totalPrice *= 0.9; 
    }

    this.totalPrice = totalPrice;
  }

  get currentStep(): string {
    let step = this.steps[0].text;
    for (let index = 0; index < this.steps.length; index++) {
      if (this.steps[index].id === this.step) {
        step = this.steps[index].text;
        break; 
      }
    }
    return step; 
  }
  


  
}
