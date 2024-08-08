<template lang="">
    <div data-v-d703b70c="" data-v-19f19603="" class="message-bubble">
        <div data-v-d703b70c="" data-type="normal" class="row message-box justify-content-start">
            <div data-v-d703b70c="" data-name="message-body" class="col order-2">
                <div data-v-5f4bf9cb="" data-v-d703b70c="" data-type="text" data-name="content-body">
                    <div data-v-5f4bf9cb="" data-name="content">
                        <div data-v-5f4bf9cb="">
                            <span data-v-5f4bf9cb="">
                                {{content}}
                            </span>
                        </div>
                    </div>
                    <p data-v-d703b70c="" data-v-5f4bf9cb="" data-name="message-status">
                        <span data-v-d703b70c="" data-v-5f4bf9cb="" data-name="success-status">
                            <span data-v-d703b70c="" data-v-5f4bf9cb="" data-name="created-at">오전 11:28</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: String,
            required: true
        }
    },
}
</script>
<style scoped>
.message-bubble[data-v-d703b70c] {
    padding: 0 .75rem;
}
.message-box[data-v-d703b70c] {
    padding: .25rem 0;
}
.justify-content-start {
    justify-content: flex-start !important;
}
.row {
    display: flex;
    flex-wrap: wrap;
}
div[class*=col][data-v-d703b70c] {
    padding: 0;
}
.order-2 {
    order: 2;
}
.col{
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
}
.col{
    position: relative;
    width: 100%;
    padding-right: .9375rem;
    padding-left: .9375rem;
}
div[data-name=message-body] div[data-name=content-body][data-v-d703b70c] {
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: flex-end;
    width: auto;
    max-width: 100%;
    border-radius: 10px;
}
@media (min-width: 768px) {
    div[data-name=content][data-v-5f4bf9cb] {
        max-width: 17.625rem;
    }
}
div[data-name=content][data-v-5f4bf9cb] {
    display: flex;
    flex-direction: column;
    order: 1;
    max-width: 15.75rem;
    padding: .75rem 1rem;
    margin: 0;
    color: #393939;
    text-align: left;
    background-color: #fff;
    border-radius: 1.125rem;
}
div[data-name=content][data-v-5f4bf9cb] {
    font-size: .875rem;
    line-height: 1.3125rem;
    font-weight: 400;
    letter-spacing: -.0125rem;
}
div[data-name=content] span[data-v-5f4bf9cb] {
    color: #323232;
    word-break: break-all;
    word-wrap: break-word;
    white-space: pre-wrap;
}
div[data-name=message-body] div[data-name=content-body] p[data-name=message-status][data-v-d703b70c] {
    order: 2;
    margin-left: .25rem;
    font-size: .625rem;
    line-height: normal;
    color: #aab4bf;
    white-space: nowrap;
}

div[data-name=message-body] div[data-name=content-body] p[data-v-d703b70c] {
    margin-bottom: 0;
}
.message-box div[data-name=user-profile][data-v-d703b70c], div[data-name=message-body] div[data-name=content-body] p[data-v-d703b70c] {
    font-size: .875rem;
    line-height: 1.3125rem;
    font-weight: 400;
    letter-spacing: -.0125rem;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
</style>