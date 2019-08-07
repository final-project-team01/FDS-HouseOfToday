import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { user_info } from 'src/app/core/models/auth.interface';
import { PasswordValidator } from './password-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  template: `
  <div class="wrapper">
    <header class="header">
      <div class="header-container">
        <a routerLink="/">
          <span alt="오늘의 집" class="signup-logo"></span>
        </a>
      </div>
    </header>
    <main class="main">
      <div class="sign-up-container">
        <h1 class="sign-up-title bold">회원가입</h1>
        <hr class="sign-up-divider">
        <section>
          <form [formGroup]="signupForm" (ngSubmit)="onSubmit()">
            <div class="form-group" formGroupName="emailGroup">
              <label class="form-label bold" for="email-id">이메일</label>
              <div class="email-form-group">
                <input type="text" id="email-id" 
                  formControlName="emailId" class="input-form" autofocus>
                  <span class="at"> @ </span>
                  <input type="text" id="email-domain" 
                    formControlName="emailDomain" class="input-form">
              </div>
              <p class="error" *ngIf="emailId.errors?.required && emailId.touched">이메일을 입력해 주세요.</p>
              <p class="error" *ngIf="emailDomain.errors?.pattern && emailDomain.touched">이메일 형식이 올바르지 않습니다.</p>
            </div>
            <div formGroupName="passwordGroup">
              <div class="form-group">
                <label class="form-label bold" for="password">비밀번호</label>
                <p class="caption">8자이상 영문자, 숫자, 특수문자를 사용하세요.</p>
                <input type="password" id="password" formControlName="password" class="input-form">
                <p class="error" *ngIf="password.errors?.required && password.touched">
                  비밀번호를 입력해 주세요.</p>
                <p class="error" *ngIf="password.errors?.pattern && password.touched">
                  영문자, 숫자, 특수문자 3가지를 포함하여 8자리 이상이어야 합니다.</p>
              </div>
              <div class="form-group">
              <label class="form-label bold" for="confirm-password">비밀번호 확인</label>
              <input type="password" id="confirm-password" formControlName="confirmPassword" class="input-form">
              <p class="error" *ngIf="confirmPassword.errors?.required && confirmPassword.touched && confirmPassword.pristine">
                비밀번호 확인을 입력해 주세요.</p>
              <p class="error" *ngIf="passwordGroup.errors?.match && confirmPassword.touched">
              비밀번호가 일치하지 않습니다</p>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label bold" for="nickname">별명</label>
              <p class="caption">2~15자 자유롭게 입력해주세요.</p>
              <input type="text" id="nickname" formControlName="nickname" class="input-form">
              <p class="error" *ngIf="nickname.errors?.required && nickname.touched">별명을 입력해주세요.</p>
              <p class="error" *ngIf="nickname.errors?.pattern && nickname.touched">
                별명은 최소 2글자 이상이어야 합니다.</p>
          </div>
        </form>
      </section>
      <section class="sign-up-policy">
        <label class="bold">약관동의</label>
          <div class="policy-form">
            <div class="policy age">
              <label class="policy-over-14" for="age-check">만 14세 이상입니다.</label>
              <label for="age-check" class="bold check-label">
                <input type="checkbox" id="age-check" class="check">동의
                <span class="text-red">(필수)</span>
              </label>
            </div>
            <div class="policy use">
              <a href="#" class="policy-link bold">이용약관</a>
              <label for="use-check" class="bold check-label">
                <input type="checkbox" id="use-check" class="check">동의
                <span class="text-red">(필수)</span>
              </label>
            </div>
            <div class="policy personal-info">
              <a a href="#" class="policy-link bold">개인정보취급방침</a>
              <label for="personal-info-check" class="bold check-label">
                <input type="checkbox" id="personal-info-check" class="check">동의
                <span class="text-red">(필수)</span>
              </label>
            </div>
            <div class="policy event">
              <label class="policy-event" for="event-check">이벤트 등 프로모션 알림 메일 수신</label>
              <label for="event-check" class="bold check-label">
                <input type="checkbox" id="event-check" class="check">동의
                <span class="text-grey">(선택)</span>
              </label>
            </div>
          </div>
          <label for="all-check" class="bold agree-all" (click)="checkAll($event)">
            <input type="checkbox" id="all-check" class="check">전체 동의
          </label>
        </section>
        <button type="submit" class="submit" (click)="onSubmit()" BlueButton>회원가입하기</button>
        <p class="has-account">이미 아이디가 있으신가요? 
          <a routerLink="/signin" class="bold login-link">로그인</a>
        </p>
      </div>
    </main>
  </div>  
  
  `,
  styles: [`
  .wrapper{
    position: relative;
    width:100%;
    height: 100vh;
  }
  .header{
    height: 70px;
    display: block;
  }
  .header-container{
    box-sizing: border-box;
    width: 1136px;
    max-width: 100%;
    min-height: 1px;
    left: 50%;
    transform: translateX(-50%);
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;

  }
  .signup-logo{
    background-repeat: no-repeat;
    background-size: 400px;
    display: inline-block;    width: 88px;
    height: 30px;
    background-position: top -541px left 0;
    background-image: url("assets/image/icon-etc.png");
  }
  .logo{
    position: absolute;
    width: 88px;
    height: 30px;
    top: 50px;
    left: 5%;
  }
  .main{
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .sign-up-container{
    margin-right: auto;
    margin-left: auto;
    width: 360px;
    max-width: 100%;
    min-height: 1px;
  }
  .sign-up-title{
    margin-bottom: 30px;
    font-size: 1.3rem
  }
  .sign-up-divider{
    margin-top: 30px;
    margin-bottom: 30px;
    border: none;
    border-top: solid 1px #ededed;
  }
  .form-group{
    margin-bottom: 30px;
  }
  .form-group input {
    box-sizing:border-box;
  }
  .form-label {
    color: #424242;
    font-size: 1rem;
    margin-bottom: 15px;
    display: block;
  }
  .input-form{
    border-radius: 4px;
    border: 1px solid #dbdbdb;
    padding: 0 15px;
    height: 40px;
    width: 100%;
  }
  .input-form:focus{
    border: 2px solid #dbdbdb;
    outline: none;
  }
  .email-form-group{
    text-align: center;
  }
  #email-id, #email-domain{
    width: 168px;
  }
  .at{
    line-height: 40px;
    text-align: center;
    width: 22px;
    color: rgb(66, 66, 66);
    font-size: 1rem;
  }
  .caption{
    font-size: 0.8rem;
    color: #757575;
    margin-bottom: 15px;
    line-height: 1.38;
  }
  .error{
    display: block;
    font-size: 0.8rem;
    color: #F77;
    margin-top: 10px;
    margin-bottom: 15px;
  }
  .bold{
    font-weight: bold;
  }
  .sign-up-policy{
    position: relative;
    margin-bottom: 30px;
  }
  .policy-form{
    border: solid 1px #dbdbdb;
    padding: 15px;
    margin-top: 15px;
    position: relative;
  }
  .policy{
    margin-bottom: 20px;
  }
  .policy.event{
    margin: 0;
  }
  .text-red{
    color: #F77;
  }
  .text-grey{
    color: #bdbdbd;
  }
  .check-label{
    float:right;
    cursor: pointer;
  }
  .policy-link, .login-link{
    text-decoration: underline;
    color: #424242;
  }
  .agree-all{
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 1.1rem;
    cursor: pointer;
  }
  .submit{
    width: 100%;
    margin-bottom: 30px;
    background-color: #35C5F0;
    border: 1px solid #35C5F0;
    color: white;
    line-height: 1;
    height: 70px;
    padding: 26px 0;
    font-size: 1.2rem;    
    cursor: pointer;
  }
  .has-account{
    text-align: center;
  }
  `]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  userInfo: user_info;
  isMore14: false;
  isCheckAll: false;
  isPolicy: false;
  isprivacy: false;
  isEvent: false;


  constructor(
    private fb: FormBuilder
    , private authService: AuthService
    , private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      emailGroup: this.fb.group({
        emailId: ['', Validators.required],
        emailDomain: ['', [
          Validators.required,
          Validators.pattern('^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$')
        ]]
      }),
      passwordGroup: this.fb.group({
        password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$')
        ]],
        confirmPassword: ['', Validators.required]
      }, { validator: PasswordValidator.match }),
      nickname: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z가-힣ㄱ-ㅎ]{2,15}$')
      ]]
    });
  }
  onSubmit() {
    if (this.signupForm.invalid) return false;
    const email = `${this.emailId.value}@${this.emailDomain.value}`
    const password = this.password.value;
    const nickname = this.nickname.value;

    this.authService.createAccounts(email, password, nickname).subscribe(
      req => this.router.navigate(['/signin'])
    )


  }
  get emailId() {
    return this.signupForm.get('emailGroup.emailId');
  }
  get emailDomain() {
    return this.signupForm.get('emailGroup.emailDomain');
  }
  get passwordGroup() {
    return this.signupForm.get('passwordGroup');
  }
  get password() {
    return this.signupForm.get('passwordGroup.password');
  }
  get confirmPassword() {
    return this.signupForm.get('passwordGroup.confirmPassword');
  }
  get nickname() {
    return this.signupForm.get('nickname');
  }
  checkAll(e) {

  }
}
