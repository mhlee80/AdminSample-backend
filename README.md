# AdminSample-v1-Lambda-AWS

# 배포 방법
1. serverless framework 설치 (https://serverless.com/)
<pre><code>$ npm install serverless -g</code></pre>
2. aws configure (https://serverless.com/framework/docs/providers/aws/guide/credentials/)
<pre><code>$ aws configure
AWS Access Key ID [None]:
AWS Secret Access Key [None]:
Default region name [None]:
Default output format [None]:
3. 배포
<pre><code>$ sls deploy --stage dev (개발 배포)
$ sls deploy --stage prod (프로덕션 배포)</pre></code>
