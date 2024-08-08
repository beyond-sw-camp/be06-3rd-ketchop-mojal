

<template>
    <Form @submit="check" :validation-schema="schema">
        <!-- 검증이 추가된 input 태그 -->
      email : <Field name="email" placeholder="이메일을 입력해주세요"></Field>
      <ErrorMessage name="email"></ErrorMessage>

      password : <Field name="password" placeholder="비밀번호를 입력해주세요"></Field>
      <ErrorMessage name="password"></ErrorMessage>
      <button>가입하기</button>
    </Form>
</template>

<script setup>
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import * as yup from 'yup';

    // 규칙 생성
    // shape 안에 규칙을 추가해주면 된다.
    const schema = yup.object().shape(
        {
          email: yup.string()
              .email("이메일 양식대로 작성해주세요.")
              .required((data) => `${data.path}는 필수입니다.`),
          password: yup.string()
              .min(8, (data) => `${data.path}는 최소 ${data.min}자를 입력해주세요`)
              .required((data) => `${data.path}는 필수입니다.`)
        }
    )

    const check = (values) => {
        console.log(values);
    }
</script>


